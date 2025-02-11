#include<bits/stdc++.h>
using namespace std;
int reverse(int n){
	int rev=0;
	while(n>0){
		rev=rev*10+n%10;
		n/=10;
	}
	return rev;
}
bool checkPalindrome(int n){
	if(n==reverse(n)){
		return true;
	}
	return false;
}
int main(){
	int n;
	cin>>n;
	cout<<checkPalindrome(n);
}
