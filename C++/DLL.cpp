#include<bits/stdc++.h>
#include<vector>
using namespace std;
class Node {
    public:
    int data;
    Node* next;
    Node* prev;
    Node(int a) {
        this->data = a;
        this->next = NULL;
        this->prev = NULL;
    }
};
Node* convertToDLL(vector<int>&arr){
	Node* start=new Node(arr[0]);
	Node* ptr=start;
	for(int i=1;i<arr.size();i++){
		Node* newNode=new Node(arr[i]);
		newNode->prev=ptr;
		ptr->next=newNode;
		ptr=newNode;
	}
	return start;
}
bool searchForNode(Node* start,int element){
	Node* ptr=start;
	while(ptr!=NULL){
		if(ptr->data == element){
			return true;
		}
		ptr=ptr->next;
	}
	return false;
}
Node* deleteFirst(Node* start){
	if(start==NULL || start->next==NULL) return NULL;
	Node* ptr=start;
	
	start=start->next;
	start->prev=NULL;
	ptr->next=NULL;
	
	free(ptr);
	return start;
	
}
Node* deleteLast(Node* start){
	if(start==NULL || start->next==NULL) return NULL;
	Node* ptr=start;
	while(ptr->next!=NULL){
		ptr=ptr->next;
	}
	Node* newTail=ptr->prev;
	newTail->next=NULL;
	ptr->prev=NULL;
	free(ptr);
	return start;
}
Node* deleteKthNode(Node* start,int k){
	if(start==NULL) return NULL;
	int cnt=0;
	Node*ptr=start;
	while(ptr!=NULL){
		cnt++;
		if(cnt==k) break;
		ptr=ptr->next;
	}
	Node* back=ptr->prev;
	Node* front=ptr->next;
	
	if(back==NULL && front==NULL){
		free(ptr);
		return NULL;
	}
	else if(back==NULL){
		return deleteFirst(start);
	}
	else if(front==NULL){
		return deleteLast(start);
	}
	else{
		back->next=front;
		front->prev=back;
		
		ptr->next=NULL;
		ptr->prev=NULL;
		free(ptr);
	}
	return start;
}
Node* deleteNode(Node* start,int ele){
	if(!searchForNode(start,ele)){
		cout<<"No such element found"<<endl;
		return NULL; 
	}
	else{
		if(start==NULL) return NULL;
	Node*ptr=start;
	while(ptr!=NULL){
		if(ptr->data==ele) break;
		ptr=ptr->next;
	}
	Node* back=ptr->prev;
	Node* front=ptr->next;
	
	if(back==NULL && front==NULL){
		free(ptr);
		return NULL;
	}
	else if(back==NULL){
		return deleteFirst(start);
	}
	else if(front==NULL){
		return deleteLast(start);
	}
	else{
		back->next=front;
		front->prev=back;
		
		ptr->next=NULL;
		ptr->prev=NULL;
		free(ptr);
	}
	}
	return start;
}
Node* insertAtBeg(Node* start,int data){
	Node* newNode=new Node(data);
	if(start==NULL) {
		start=newNode;
		return start;
	}
	newNode->next=start;
	start->prev=newNode;
	start=newNode;
	return start;
	
}
Node* insertAtEnd(Node* start,int data){
	Node* newNode=new Node(data);
	if(start==NULL) {
		start=newNode;
		return start;
	}
	Node* ptr=start;
	while(ptr->next!=NULL){
		ptr=ptr->next;
	}
	ptr->next=newNode;
	newNode->prev=ptr;
	return start;
	
}
Node* insertAtKth(Node* start,int a,int k){
	if(k==1){
		return insertAtBeg(start,a);
	}
	int cnt=0;
	Node* ptr=start;
	while(ptr!=NULL){
		cnt++;
		if(cnt==k){
			break;
		}
		ptr=ptr->next;
	}
	Node* back=ptr->prev;
	Node* newNode=new Node(a);
	newNode->next=ptr;
	newNode->prev=back;
	
	back->next=newNode;
	ptr->prev=newNode;
	return start;
}
Node* insertBeforeNode(Node* start,int a,int ele){
	if(start->data==ele){
		return insertAtBeg(start,a);
	}
	Node* ptr=start;
	while(ptr!=NULL){
		if(ptr->data==ele){
			break;
		}
		ptr=ptr->next;
	}
	Node* back=ptr->prev;
	Node* newNode=new Node(a);
	newNode->next=ptr;
	newNode->prev=back;
	
	back->next=newNode;
	ptr->prev=newNode;
	return start;
}
void printDLL(Node* start){
	Node* ptr=start;
	cout<<"NULL<=>";
	while(ptr!=NULL){
		cout<<ptr->data<<"<=>";
		ptr=ptr->next;
	}
	cout<<"NULL";
}
int main(){
	vector<int>arr;
	arr.push_back(10);
	arr.push_back(20);
	arr.push_back(30);
	arr.push_back(40);
	Node* head=convertToDLL(arr);
	printDLL(head);
	
//	cout<<"\nAfter Deleting Head:"<<endl;
//	Node* HEAD=deleteFirst(head);
//	printDLL(HEAD);
	
//	cout<<"\nAfter Deleting Last:"<<endl;
//	Node* HEAD=deleteLast(head);
//	printDLL(HEAD);

//  int k;
//  cout<<"\nEnter k to delete:"<<endl;
//  cin>>k;
//	Node* HEAD=deleteKthNode(head,k);
//	printDLL(HEAD);
	
//	int k;
//    cout<<"\nEnter Element to delete:"<<endl;
//    cin>>k;
//	Node* HEAD=deleteNode(head,k);
//	printDLL(HEAD);

//	int data;
//    cout<<"\nEnter Element to insert at Beg:"<<endl;
//    cin>>data;
////    Node* head=NULL;
//	Node* HEAD=insertAtBeg(head,data);
//	printDLL(HEAD);
	
//	int data;
//    cout<<"\nEnter Element to insert at End:"<<endl;
//    cin>>data;
////    Node* head=NULL;
//	Node* HEAD=insertAtEnd(head,data);
//	printDLL(HEAD);

//	int data,k;
//    cout<<"\nEnter Element to insert at k:"<<endl;
//    cin>>data>>k;
////    Node* head=NULL;
//	Node* HEAD=insertAtKth(head,data,k);
//	printDLL(HEAD);
	
	int data,element;
    cout<<"\nEnter Element to insert at before node:"<<endl;
    cin>>data>>element;
//  Node* head=NULL;
	Node* HEAD=insertBeforeNode(head,data,element);
	printDLL(HEAD);
	
	
}

