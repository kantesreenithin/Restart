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
class Queue{
	Node* start,*end;
	int size;
	public:
		Queue(){
			start=end=NULL;
			size=0;
		}
		void push(int x){
			Node* newNode=new Node(x);
			if(start==NULL){
				start=end=newNode;
			}
			else{
				end->next=newNode;
				end=newNode;
			}
			cout<<"Element pushed\n";
			size++;
		}
		int pop(){
			if(start==NULL) return -1;
			Node* temp=start;
			int data=temp->data;
			start=start->next;
			delete temp;
			size--;
			return data;
		}
		int Size(){
			return size;
		}
		int Top(){
			if(start==NULL) return -1;
			return start->data;
		}
		void printQueue(){
			Node* ptr=start;
			while(ptr!=NULL){
				cout<<ptr->data<<"->";
				ptr=ptr->next;
			}
		}
};
int main() {
  Queue q;
  q.push(10);
  q.push(11); 
  q.push(12);
  q.push(13);
  cout << "Element popped: " << q.pop() << "\n";
  cout << "Queue size: " << q.Size() << "\n";
//  cout <<"Stack empty or not? "<<s.stackIsEmpty()<<"\n";
  cout << "queue's top element: " << q.Top() << "\n";
  q.printQueue();
  return 0;
}
