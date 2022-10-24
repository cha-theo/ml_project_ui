from flask import Flask, jsonify, abort, request

app = Flask(__name__)

# GET ping: Returns pong (not necessarily as JSON)


@app.route("/ping")
def ping():
    return "Pong"


@app.route("/restaurants")
def fetch_all_restaurants():
    # some logic
    return jsonify({"data": restaurants, "count": len(restaurants)})

# GET restaurants/restaurant_name: Returns a specific restaurant


@app.route("/restaurants/<string:name>")
def restaurant_by_name(name):
    for restaurant in restaurants:
        if restaurant["name"] == name:
            return jsonify(restaurant)
    abort(400)


# GET restaurants/restaurant_name/menu : Returns the menu of a specific restaurant / creates an
# item in the menu of the specific restaurant
@app.route("/restaurants/<string:name>/menu")  # Relationship
def menu_by_restaurant_name(name):
    for restaurant in restaurants:
        if restaurant["name"] == name:
            # some weird filtering
            # try
            # except
            # abort(500)
            return jsonify(restaurant['menu'])
    abort(400)


# POST restaurants: Create a new restaurant from the given JSON in request and return it

@app.route("/restaurants", methods=['POST'])  # Our Resource
def create_restaurant():
    new_restaurant_data = request.get_json()  # gets the JSON that the client sent
    new_restaurant = {"name": new_restaurant_data["name"], "menu": []}
    restaurants.append(new_restaurant)
    return jsonify({"data": restaurants, "count": len(restaurants)})


@app.route("/test", methods=['GET'])
def test():
    # some logic
    response = jsonify(charts)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


restaurants = [{
    "name": "some_restaurant",
    "menu": [{"name": "pizza", "price": 22}]
},
    {
        "name": "some_restaurant2",
        "menu": [{"name": "pizzaa", "price": 222}]
}
]


charts = {
    "barChart": [{"pv": 2400,
                 "uv": 4000,
                  "amt": 2400,
                  "name": "Page AAAAaaAA"},
                 {"pv": 2400,
                 "uv": 4000,
                  "amt": 2400,
                  "name": "Page AAAAaaAA"}],

    "pieChart": [{"pv": 2400,
                 "uv": 4000,
                  "amt": 2400,
                  "name": "Page A"}],

    "areaChart": [{"pv": 2400,
                  "uv": 4000,
                   "amt": 2400,
                   "name": "Page A"}],

    "lineChart": [{"pv": 2400,
                  "uv": 4000,
                   "amt": 2400,
                   "name": "Page A"}]
}


if __name__ == "__main__":
    app.run(debug=True, port=5500)
