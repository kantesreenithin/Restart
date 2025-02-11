#include<bits/stdc++.h>
using namespace std;
class Node{
	public:
	int data;
	Node* next;
	Node(int a){
		this->data=a;
		this->next=NULL;
	}
};
Node* start=NULL;
void insertAtBeg(int a){
	Node* newNode=new Node(a);
	if(start==NULL){
		start=newNode;
	}
	else{
		newNode->next=start;
    	start=newNode;	
	}
}
void insertAtEnd(int a){
	Node* newNode=new Node(a);
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
	Node* newNode=new Node(data);
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
	Node* newNode=new Node(data);
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
void insertBeforeNode(int element,int data){
	Node* newNode=new Node(data);
	Node* ptr=start;
	if(searchForNode(element)){
		while(ptr->next->data!=element){
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
void deleteNode(int a){
if (!searchForNode(a)) {
        cout << "No such element found in ll\n";
        return;
    }
    else{
    	if(start->data==a){
		Node* ptr=start;
		start=start->next;
		delete ptr;
		return;
	}
	Node* ptr = start;
    Node* prev = NULL; 	
	while(ptr!=NULL){
		if(ptr->data==a){
			prev->next=prev->next->next;
			free(ptr);
			break;
		}
		prev=ptr;
		ptr=ptr->next;
	}
	}
	
}

void deleteAtKthIndex(int k){	
    int cnt=0;
    Node* ptr = start;
    Node* prev = NULL;  
    if(k==1){
    	Node* ptr = start;
    	start=start->next;
    	delete ptr;
    	return;
	}
    while(ptr!=NULL){
    	cnt++;
    	if(cnt==k){
    		prev->next=prev->next->next;
    		delete ptr;
    		break;
		}
		prev=ptr;
    	ptr=ptr->next;
	}
}

void printLL(){
	Node* ptr=start; 
	while(ptr!=NULL){
		cout<<ptr->data<<"->";
		ptr=ptr->next;
	}
	cout<<"NULL";
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

//	int element,data;
//	cin>>element>>data;
//	cout<<"\nEnter element to insert after node:"<<endl;
//	insertAfterNode(element,data);

	cout<<"\nThe LL: ";
	printLL();
	int element,data;
	cout<<"\nEnter element to insert before node:"<<endl;
	cin>>element>>data;
	insertBeforeNode(element,data);

//	cout<<"\nThe LL: ";
//	printLL();

//	cout<<"\nEnter element to Del:"<<endl;
//	int a;
//	cin>>a;
//	deleteNode(a);
//	cout<<"\nEnter position to Del:"<<endl;
//	int k;
//	cin>>k;
//    deleteAtKthIndex(k);
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
