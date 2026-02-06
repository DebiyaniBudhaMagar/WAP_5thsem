import json

# convert json into python object
#multiline strings using single quotes in python

str_person = '''{
    "name": "Debiyani",
    "address": "jadibuti",
    "marks": 85
    }'''
#notice "marks":85 no comma here
obj_person = json.loads(str_person)   #json parsing
#process of converting json into python object is called json parsing

print(type(str_person))   #str
print(type(obj_person))   #dict

print(obj_person['name'])    #Debiyani
print(obj_person['address'])  #jadibuti
print(obj_person['marks'])  #85

obj_person['name'] = 'Diya'
print(obj_person['name'])  #modified json, updated name Diya

obj_person['email']= 'debiyani@gmail.com'
print(obj_person['email'])  #modified json,appended new field email

#convert python object to json (serialization)

dog_data = {
    "name": "rio",
    "bread_id": 1,
    "bread": "Labrador",
    "weight": 30.5,
    "age": 5
}

json_dog_data = json.dumps(dog_data)  #serialization
print(type(dog_data))   #dict
print(type(json_dog_data))  #str