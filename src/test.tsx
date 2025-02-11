#include <stdio.h>

void arrayProducts(int n, int arr[], int rarr[]) {
    for (int i = 0; i < n; i++) {
        rarr[i] = 1;
        for (int j = 0; j < n; j++) {
            if (i != j) {
                rarr[i] *= arr[j];
            }
        }
    }

    // Print the result
    for (int i = 0; i < n; i++) {
        printf("%d ", rarr[i]);
    }
    printf("\n");
}

int main() {
    int n;
    scanf("%d", &n);

    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Create an empty result array
    int rarr[n];

    // Call arrayProducts and display the result
    arrayProducts(n, arr, rarr);

    return 0;
}

#include <stdio.h>
#include <stdlib.h>

int* MergeSortedArrays(int sizeMaya, int arrMaya[], int sizeDiego, int arrDiego[]) {
// Write your code here

}

int main() {
// Read input values from stdin
int sizeMaya;
scanf("%d", &sizeMaya);
int* arrMaya = (int*)malloc(sizeMaya * sizeof(int));
for (int i = 0; i < sizeMaya; i++) {
scanf("%d", &arrMaya[i]);
}

int sizeDiego;
scanf("%d", &sizeDiego);
int* arrDiego = (int*)malloc(sizeDiego * sizeof(int));
for (int i = 0; i < sizeDiego; i++) {
scanf("%d", &arrDiego[i]);
}

// Call MergeSortedArrays and display the result
int* result = MergeSortedArrays(sizeMaya, arrMaya, sizeDiego, arrDiego);
for (int i = 0; i < sizeMaya + sizeDiego; i++) {
printf("%d ", result[i]);
}

// Free allocated memory
free(arrMaya);
free(arrDiego);
free(result);

return 0;
}