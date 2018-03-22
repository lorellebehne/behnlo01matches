from flask import Flask, request, jsonify, Response

app = Flask(__name__)

@app.route("/saveList")
def save():
	data = open("data.txt","w")
	lst = request.args['lst']
	data.write(lst)
	return ""
	
	
@app.route("/getList")
def load():
	data = open("data.txt","r")
	lst = data.readline()[:-1]
	return lst

if __name__=="__main__":
	app.run(debug=True, port=5001)