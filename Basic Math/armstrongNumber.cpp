#include<bits/stdc++.h>
using namespace std;
int countDigits(int n){
	int count=0;
	while(n>0){
		count++;
		n/=10;
	}
	return count;
}
int Armstrong(int n,int count){
	int sum=0;
	while(n>0){
		int rem=n%10;
		sum+=pow(rem,count);
		n/=10;
	}
	return sum;
}
int main(){
	int n;
	cin>>n;
	int count=countDigits(n);
	int res=Armstrong(n,count);
	if(n==res){
		cout<<"Armstrong";
	}else{
		cout<<"Not an Armstrong";
	}
}
