from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Replace with your actual Gemini API key
GEMINI_API_KEY = "your_gemini_api_key"
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText"

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "Message is required"}), 400

    response = requests.post(
        GEMINI_API_URL,
        json={"prompt": {"text": user_input}},
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {GEMINI_API_KEY}"}
    )

    if response.status_code == 200:
        response_data = response.json()
        bot_reply = response_data.get("candidates", [{}])[0].get("output", "Sorry, I couldn't process that.")
        return jsonify({"reply": bot_reply})
    else:
        return jsonify({"error": "Failed to fetch response"}), response.status_code

if __name__ == "__main__":
    app.run(debug=True)
