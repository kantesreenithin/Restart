#include<bits/stdc++.h>
#include<vector>
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

Node* convertArrToLL(vector<int> &arr) {
    Node* start = new Node(arr[0]); 
    Node* ptr = start;
    for (int i = 1; i < arr.size(); i++) {
        Node* temp = new Node(arr[i]); 
        ptr->next = temp;  
        ptr = temp;       
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
int  searchInLL(Node* start,int element){
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

int lengthOfLL(Node* start) {
    Node* ptr = start; 
    int count=0;
    while (ptr != NULL) {
        ptr = ptr->next;
        count++;
    }
    return count;
}
Node* deleteAtFirst(Node* start){
	if(start==NULL)return start;
	Node* ptr=start;
	start=start->next;
	free(ptr);
	return start;
}
Node* deleteAtLast(Node* start){
	if(start==NULL | start->next==NULL)return NULL;
	Node* ptr=start;
	while(ptr->next->next!=NULL){
		ptr=ptr->next;
	}
	ptr->next=NULL;
	free(ptr->next);
	return start;
}
Node* deleteAtKthIndex(Node* start,int k){	
	if(start==NULL) return start;  
    if(k==1){
    	Node* ptr = start;
    	start=start->next;
    	delete ptr;
    	return start;
	}
	Node* ptr = start;
    Node* prev = NULL;
    int cnt=0;
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
	return start;
}
Node* deleteNode(Node* start,int k){	
	if(!searchForNode(start,k)){
		cout<<"No Such element Found"<<endl;
		return start;
	}
	else{
		if(start==NULL) return start;  
    if(start->data==k){
    	Node* ptr = start;
    	start=start->next;
    	delete ptr;
    	return start;
	}
	Node* ptr = start;
    Node* prev = NULL;
    int cnt=0;
    while(ptr!=NULL){
    	if(ptr->data==k){
    		prev->next=prev->next->next;
    		delete ptr;
    		break;
		}
		prev=ptr;
    	ptr=ptr->next;
	}
	return start;
	}
}
Node* insertAtFirst(Node* start,int a){
	Node* newNode=new Node(a);
	if(start==NULL){
		start=newNode;
	}else{
		newNode->next=start;
		start=newNode;
	}
	return start;
}
Node* insertAtLast(Node* start,int a){
	Node* newNode=new Node(a);
	if(start==NULL){
		start=newNode;
	}
	else{
		Node*ptr=start;
		while(ptr->next!=NULL){
			ptr=ptr->next;
		}
		ptr->next=newNode;
	}
	return start;
}
Node* insertAtKth(Node* start,int a,int k){
	Node* newNode=new Node(a);
	if(start==NULL){
		if(k==1){
			newNode->data=a;
			newNode->next=start;
			start=newNode;
			return start;
		}
		else{
			cout<<"Cannot done"<<endl;
			return NULL;
		}
	}
	if(k==1){
		newNode->data=a;
		newNode->next=start;
		start=newNode;
		return start;
	}
	int cnt=0;
	Node* ptr=start;
	while(ptr!=NULL){
		cnt++;
		if(cnt==k-1){
			newNode->data=a;
			newNode->next=ptr->next;
			ptr->next=newNode;
			break;
		}
		ptr=ptr->next;
	}
	return start;
}
Node* insertBeforeNode(Node* start,int element,int data){
	Node* newNode=new Node(data);
	Node* ptr=start;
	if(searchForNode(start,element)){
		if(start->data==element){
			newNode->data=data;
			newNode->next=start;
			start=newNode;
			return start;
		}
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
	return start;
}
void printLL(Node* start) {
    Node* ptr = start; 
    while (ptr!= NULL) {
        cout << ptr->data << "->";
        ptr = ptr->next;
    }
    cout << "NULL" << endl;
}

int main() {
    vector<int> arr;
	arr.push_back(10);
	arr.push_back(20);
	arr.push_back(30);
	arr.push_back(40); 
	
    Node* start = convertArrToLL(arr);
    printLL(start); 
//    seaarch in LL
//    int element;
//    cout<<"\nEnter element to search: "<<endl;
//    cin>>element;
//    cout<<"Element Found at: "<<searchInLL(start,element)<<endl;
//    cout<<searchForNode(start,element)<<endl;
//    printLL(start);
 
//	len in LL
//	cout<<"\nlenght of LL:"<<lengthOfLL(start)<<endl;

//	cout<<"\nEnter position to delete:"<<endl;
//	int index;
//	cin>>index;
//	Node* start1=deleteAtKthIndex(start,index);
	
//	Node* head=deleteAtFirst(start);
	
//	Node* head=deleteAtLast(start);

//	int element;
//	cout<<"\nEnter element to delete:"<<endl;
//	cin>>element;
//	Node* head=deleteNode(start,element);

//	int element;
//	cout<<"\nEnter element to Insert At Beg:"<<endl;
//	cin>>element;
//	Node* start=NULL;
//	Node* head=insertAtFirst(start,element);
	
//	int element;
//	cout<<"\nEnter element to Insert At End:"<<endl;
//	cin>>element;
//	Node* head=insertAtLast(start,element);
//	printLL(head); 

//	int element,index;
//	cout<<"\nEnter element to Insert At Position:"<<endl;
//	cin>>element>>index;
//	Node* head=insertAtKth(start,element,index);
//	printLL(head); 

	int element,data;
	cout<<"\nEnter element to Insert before Node:"<<endl;
	cin>>element>>data;
	Node* head=insertBeforeNode(start,element,data);
	printLL(head); 
	               				     
    return 0;
}

