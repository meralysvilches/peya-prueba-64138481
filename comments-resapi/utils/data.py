import json
 

def read_json_comments():
    filename = open('static/comments.json',)
    data = json.load(filename)
    return data

def read_json_albums():
    filename = open('static/albums.json',)
    data = json.load(filename)
    return data