from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def calculate_days_left(age_in_years, average_lifespan_days=30000):
    age_in_days = age_in_years * 365
    days_left = average_lifespan_days - age_in_days
    return days_left

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    age = data.get('age')
    if age is None or not isinstance(age, (int, float)) or age < 0:
        return jsonify({'error': 'Invalid age input.'}), 400
    days_left = calculate_days_left(age)
    return jsonify({'days_left': days_left})

if __name__ == "__main__":
    app.run(debug=True)
