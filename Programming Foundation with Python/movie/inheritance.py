class Parent():
    def __init__(self, last_name, eye_color):
        print("Parent Constructor Called")
        self.last_name = last_name
        self.eye_color = eye_color

    def show_info(self):
        print("Last Name - " + self.last_name)
        print("Eye Color - " + self.eye_color)

#usually would keep definition of class parent and its instance in separate files
#supa_man = Parent("Magic", "Brown")
#print(supa_man.last_name)
#supa_man.show_info()

class Child(Parent):
    def __init__(self, last_name, eye_color, number_of_toys):
        print("Child Constructor Called")
        Parent.__init__(self, last_name, eye_color)     #this is where Child inherits attributes from Parent Class
        self.number_of_toys = number_of_toys

    def show_info(self):
        print("Last Name - " + self.last_name)
        print("Eye Color - " + self.eye_color)
        print("Number of toys - " + str(self.number_of_toys))

supa_son = Child("Strong", "Blue", 5)
#print(supa_son.last_name)
#print(supa_son.number_of_toys)
supa_son.show_info()
