from flask import Flask, request, jsonify
from flask_cors import CORS
from recommender import generate_recommendations

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "SkillNova Backend Running 🚀"
    })

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()

    if not data or "skills" not in data:
        return jsonify({
            "error": "No skills provided."
        }), 400

    recommendations = generate_recommendations(data["skills"])

    return jsonify({
        "success": True,
        "recommendations": recommendations
    })

if __name__ == "__main__":
    app.run(debug=True)