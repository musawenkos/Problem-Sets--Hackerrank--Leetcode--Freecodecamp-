int birthdayCakeCandles(int n, vector <int> ar) {
    // Complete this function
    int max = ar[0];
    int count = 0;
    for(int i=0; i<n; i++)
        if(ar[i] > max)
            max = ar[i];
    for(int i = 0; i < n; i++)
        if (ar[i] == max)
            count++;
    return count;
}