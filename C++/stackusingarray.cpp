 #include<iostream>
using namespace std;
class Stack {
int arr[1000];
int top;	
public:
	Stack(){
		top=-1;
	}
void push(int val)
{
	if(top>1000)
	{cout<<"overflow"<<endl;}
	else
	{
	  top=top+1;
	  arr[top]=val;
    }
}
int pop()
{
	if(top<0)
	{
		cout<<"underflow"<<endl;
		return -1;
	}
	else
	{
		int x=arr[top];
		top=top-1;
		return x;
	}
}
int Top(){
	if(top==-1) return -1;
	return arr[top];
}
int size(){
	return top+1;
}
};
int main()
{
	Stack s;
	s.push(6);
	s.push(3);
	s.push(7);
	cout<<"top element:"<<s.Top()<<endl;
	cout<<"size:"<<s.size()<<endl;
	cout<<"element removed:"<<s.pop()<<endl;
	cout<<"size:"<<s.size()<<endl;
	cout<<"top element:"<<s.Top()<<endl;
	return 0;
}
