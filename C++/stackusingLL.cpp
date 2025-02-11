#include<bits/stdc++.h>
using namespace std;
class Node {
    public:
    int data;
    Node* next;
    Node(int a) {
        this->data = a;
        this->next = NULL;
    }
};
class Stack{
	Node* top;
	int size;
	public:
		Stack(){
			top=NULL;
			size=0;
		}
		void push(int x){
			Node* newNode=new Node(x);
			newNode->next=top;
			top=newNode;
			cout<<"Element pushed\n";
			size++;
		}
		int pop(){
			if(top==NULL) return -1;
			Node* temp=top;
			int data=temp->data;
			top=top->next;
			delete temp;
			size--;
			return data;
		}
		int Size(){
			return size;
		}
		int Top(){
			if(top==NULL) return -1;
			return top->data;
		}
		void printStack(){
			Node* ptr=top;
			while(ptr!=NULL){
				cout<<ptr->data<<"->";
				ptr=ptr->next;
			}
		}
};
int main() {
  Stack s;
  s.push(10);
  s.push(11); 
  s.push(12);
  s.push(13);
  cout << "Element popped: " << s.pop() << "\n";
  cout << "Stack size: " << s.Size() << "\n";
//  cout <<"Stack empty or not? "<<s.stackIsEmpty()<<"\n";
  cout << "stack's top element: " << s.Top() << "\n";
  s.printStack();
  return 0;
}
