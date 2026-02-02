from flask import Flask, jsonify

app = Flask(__name__)

propiedades = [
    {"id":1, "tipo":"Casa", "ciudad":"Itauguá", "precio":"300.000.000"}
]

@app.route("/propiedades", methods=["GET"])
def obtener():
    return jsonify(propiedades)

app.run()
