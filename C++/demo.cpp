#include<bits/stdc++.h>
using namespace std;
struct Node{
	int data;
	Node* next;
};
Node* start=NULL;
Node* createNode(int a){
	Node* n1=new Node();
	n1->data=a;
	n1->next=NULL;
	return n1;
}
void insertAtBeg(int a){
	Node* newNode=createNode(a);
	if(start==NULL){
		start=newNode;
	}
	else{
		newNode->next=start;
    	start=newNode;	
	}
}
void insertAtEnd(int a){
	Node* newNode=createNode(a);
	Node* ptr=start;
	while(ptr->next!=NULL){
		ptr=ptr->next;
	}
	ptr->next=newNode;
}
int  searchInLL(int element){
	Node* ptr=start;
	int i=0;
	while(ptr!=NULL){
		if(ptr->data == element){
			return i;
		}
		ptr=ptr->next;
		i++;
	}
}
void insertAtIndex(int data,int index){
	Node* newNode=createNode(data);
	Node* ptr=start;
	int i=0;
	while(i!=index-1){
		ptr=ptr->next;
		i++;
	}
	newNode->data=data;
	newNode->next=ptr->next;
	ptr->next=newNode;
}
bool searchForNode(int element){
	Node* ptr=start;
	while(ptr!=NULL){
		if(ptr->data == element){
			return true;
		}
		ptr=ptr->next;
	}
	return false;
}
void insertAfterNode(int element,int data){
	Node* newNode=createNode(data);
	Node* ptr=start;
	if(searchForNode(element)){
		while(ptr->data!=element){
			ptr=ptr->next;
		}
		newNode->data=data;
		newNode->next=ptr->next;
		ptr->next=newNode;
	}
	else{
		cout<<"No such element found in  ll\n";
	}
}
void printLL(){
	Node* ptr=start; 
	while(ptr!=NULL){
		cout<<ptr->data<<"->";
		ptr=ptr->next;
	}
}
int main(){
	insertAtBeg(10);
	insertAtBeg(20);
	insertAtBeg(30);
	insertAtEnd(40);
//	int a;
//	cin>>a;
//	cout<<"element found at index: "<<searchInLL(a)<<endl;

//	int a,index;
//	cin>>a>>index;
//	insertAtIndex(a,index);

	int element,data;
	cin>>element>>data;
	insertAfterNode(element,data);
	cout<<"\nThe LL: ";
	printLL();
}











//in Class
//#include<bits/stdc++.h>
//using namespace std;
//class node{
//	public:
//	int data;
//	node* next;
//	
//	node(){
//		data=0;
//		next=NULL;
//	}	
//	
//	node(int data){
//		this->data=data;
//		this->next=NULL;
//	}
//};
//node* start=NULL;
//void insertAtBeg(int a){
//	node* newNode=new node(a);
//	if(start==NULL){
//		start=newNode;
//	}
//	else{
//		newNode->next=start;
//    	start=newNode;	
//	}
//}
//void printLL(){
//	node* ptr=start; 
//	while(ptr!=NULL){
//		cout<<ptr->data<<"->";
//		ptr=ptr->next;
//	}
//	cout<<"NULL"<<endl;
//}
//int main(){
//	insertAtBeg(10);
//	insertAtBeg(20);
//	insertAtBeg(30);
//	insertAtBeg(40);
//	insertAtBeg(50);
//	printLL();
//}
