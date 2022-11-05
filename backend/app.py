from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:""@localhost/flask"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)
    img = db.Column(db.String(100))

    def __init__(self, title, body, img):
        self.title = title
        self.body = body
        self.img = img


class ArticleSchema(ma.Schema):
    class Meta():
        fields = ('id', 'title', 'body', 'date', 'img')

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)

@app.route('/add', methods = ['POST'])
def add_articles():
    title = request.json['title']
    body = request.json['body']
    img = request.json['img']

    articles = Articles(title, body, img)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)
    
@app.route('/update/<id>/', methods = ['PUT'])
def update_article(id):
    article = Articles.query.get(id)
    
    title = request.json['title']
    body = request.json['body']
    img = request.json['img']
    
    article.title = title
    article.body = body
    article.img = img
    
    db.session.commit()
    return article_schema.jsonify(article)
    
@app.route('/delete/<id>/', methods = ['DELETE'])
def article_delete(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    
    db.session.commit()
    return article_schema.jsonify(article)
    
if __name__ == "__main__":
    app.run(debug=True)