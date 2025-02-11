#include <iostream>
using namespace std;

class Queue {
    int* arr;
    int start;
    int end;
    int currsize;
    int maxSize;

public:

    Queue() {
        maxSize = 4; 
        arr = new int[maxSize];
        start = -1;
        end = -1;
        currsize = 0;
    }


    Queue(int maxSize) {
        this->maxSize = maxSize;
        arr = new int[maxSize];
        start = -1;
        end = -1;
        currsize = 0;
    }




    void push(int x) {
        if (currsize == maxSize) {
            cout << "Queue overflow: cannot add more elements." << endl;
            return;
        }
        if (end == -1) {
            start = 0;
            end = 0;
        } else {
            end = (end + 1) % maxSize;
        }
        arr[end] = x;
        currsize++;
    }


    int pop() {
        if (currsize == 0) {
            cout << "Queue underflow: no elements to remove." << endl;
            return -1; 
        }
        int ele = arr[start];
        if (currsize == 1) {
            start = end = -1; 
        } else {
            start = (start + 1) % maxSize;
        }
        currsize--;
        return ele;
    }


    int Top() {
        if (currsize == 0) {
            cout << "Queue is empty: no front element." << endl;
            return -1; 
        }
        return arr[start];
    }


    int size() {
        return currsize;
    }
};

int main() {
    Queue q(6); 
    q.push(4);
    q.push(14);
    q.push(24);
    q.push(34);

    cout << "The front element of the queue before deleting any element: " << q.Top() << endl;
    cout << "The size of the queue before deletion: " << q.size() << endl;

    cout << "The first element to be deleted: " << q.pop() << endl;
    cout << "The front element of the queue after deleting an element: " << q.Top() << endl;
    cout << "The size of the queue after deleting an element: " << q.size() << endl;

    return 0;
}

