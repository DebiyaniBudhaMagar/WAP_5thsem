#this example code covers xml syntax and parsing demo

import xml.etree.ElementTree as ET

str_person = '''<?xml version="1.0" encoding="UTF-8"?>
    <person>
        <name>Debiyani</name>
        <address>jadibuti</address>
        <marks>85</marks>
    </person>
'''

obj_person = ET.fromstring(str_person)   #xml parsing

print(type(str_person))   #str
print(type(obj_person))   #Element

#accessing xml data
print(obj_person.find('name').text)    #Debiyani
print(obj_person.find('address').text)  #jadibuti
print(obj_person.find('marks').text)  #85

obj_person.find('name').text = 'Diya'
print(obj_person.find('name').text)  #modified xml, updated name Diya

ET.SubElement(obj_person, 'email').text = 'debiyani@gmail.com'  #modified xml,appended new field email
print(ET.tostring(obj_person).decode())  #print modified xml
