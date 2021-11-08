from flask import Flask, jsonify 
from utils.data import read_json_comments,read_json_albums
from collections import Counter
from operator import itemgetter


app = Flask(__name__)


#creando una ruta de prueba para verificar si el servidor responde 
@app.route('/')
def getHome():
    return jsonify({"api":"v1!"})

#Todos los comentarios disponibles
@app.route('/comments')
def getComments():
    data = read_json_comments()
    return jsonify(data)

#Dado un id de posteo, retornar todos los comentarios relacionados a dicho posteo
@app.route('/comments/<int:postId>')
def getCommentByPostId(postId):
    json_data = read_json_comments()
    comments = [items  for items in json_data if items['postId'] == postId ]
    return jsonify(comments)

#Retornar el posteo con mayor cantidad de comentarios asociados. Si existe más de uno, devolverlos todos
@app.route('/post/max')
def getMaximumPost():
    json_data = read_json_comments()
    amounts = Counter(k['postId'] for k in json_data if k.get('postId'))
    result_list = amounts.most_common()
    maximum = max(result_list,key=itemgetter(1))[1]
    list_end = []
    for values in result_list:
        if values[1] == maximum:
            list_end.append(values[0])
    return jsonify(list_end)

#Dado un id de usuario, devolver los álbumes que tiene asociado.
@app.route('/album/<int:userId>')
def getAlbumByUserId(userId):
    json_data = read_json_albums()
    albums = [items  for items in json_data if items['userId'] == userId ]
    return jsonify(albums)


if __name__ == '__main__':
    app.run(debug=True, port = 4000)
