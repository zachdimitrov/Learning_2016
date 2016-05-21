#### one-dimentional arrays
###### declare arrays
```C#
int[] arr = new int[5]; // new array with 5 elements (cannot be changed)
string[] text = {"one", "two", "three"}; // setting values of array
int length = text.Length; // shows length of array (int)
```
###### reverse array
```C#
int[] array = new int[] {1, 2, 3, 4, 5, 6};
int[] reversed = new int[array.Length];
for (int i=o; i<array.Length; i++) { reversed[array.Length - i - 1] = array[i]; }
```
###### reading and writing arrya to console
```C#
int[] arr = new int[5];
for (int i = 0; i < 5; i++) { arr[i] = int.Parse(Console.ReadLine()); }
```
###### symmetry check
```C#
bool isSymetric = true;
for (int i = 0; i < array.Length / 2; i++)
{
  if (array[i] != array[n - i - 1]) { isSymetric = false; }
}
```
###### print array to console
```C#
string[] array = {"one", "two", "three"};
for (int index = 0; index < array.Length; index++) // Process all elements of the array
{
    Console.WriteLine("element[{0}] = {1}", index, array[index]); // Print each element on a separate line
}
```
###### resizable arrays List<>
```C#
List<int> intList = new List<int>();
for (int i = 0; i < 5; i++) { intList.Add(i); }
int Length = intList.Count;      // shows length of used list
int Capacity = intList.Capacity; // shows current capacity
```
###### copy arrays - array is a refference type so we do not use simple =
```C#
int[] array = new [5] { 1, 2, 3, 4, 5 };
int[] copyArray = (int[])array.Clone();
```
#### multi-dimentional arrays
```C#
int[,] matrix = new int[3, 4];
string[,,] stringCube = new string[5, 5, 5];
matrix =                 // The matrix size is 2 x 4 (2 rows, 4 cols)
{
      { 1, 2, 3, 4 }, // row 0 values
      { 5, 6, 7, 8 }, // row 1 values
}; 
int element11 = matrix[1, 1]; // element11 = 1
for (int row = 0; row < 2; row++)               //reading a matrix
{
    for (int column = 0; column < 4; column++)
    {
          Console.Write("matrix[{0},{1}] = ", row, column);
          matrix[row, column] = int.Parse(Console.ReadLine());
    }
}
for (int row = 0; row < matrix.GetLength(0); row++)       //printing a matrix
{
    for (int col = 0; col < matrix.GetLength(1); col++)
    {
        Console.Write("{0, 4}", matrix[row, col]);
    }
    Console.WriteLine();
}
```
###### find maximal platform
```C#
int[,] matrix =
{
    {7, 1, 3, 3, 2, 1},
    {1, 3, 9, 8, 5, 6},
    {4, 6, 7, 9, 1, 0}
};
int bestSum = int.MinValue;
for (int row = 0; row < matrix.GetLength(0) - 1; row++)
{
    for (int col = 0; col < matrix.GetLength(1) - 1; col++)
    {
        int sum = matrix[row, col] + matrix[row, col + 1] +
                  matrix[row + 1, col] +
                  matrix[row + 1, col + 1];
        if (sum > bestSum)
            bestSum = sum;
    }
}
```