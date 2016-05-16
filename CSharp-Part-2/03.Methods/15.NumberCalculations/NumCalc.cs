﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericApplication
{
    public class GerenicArray<T>
    {
        private T[] array;
        public void MyGenArray(int size)
        {
            array = new T[size + 1];
        }
        public T getItem(int index)
        {
            return array[index];
        }
        public void setItem(int index, T value)
        {
            array[index] = value;
        }
    } 
    999+-888-
    class NumCalc
    {
        static void Main()
        {
            int[] arr = ReceiveIntArray();
            Console.WriteLine(Minimum(arr));
            Console.WriteLine(Maximum(arr));
            Console.WriteLine("{0:F2}", Average(arr));
            Console.WriteLine(Sum(arr));
            Console.WriteLine(Product(arr));
        }

        private static List<T> Product<T>(T arr) // Return Product of Int Array
        {
            long prod = 1;
            for (int i = 0; i < arr.Count; i++)
            {
                prod *= arr[i];
            }
            return prod;
        }

        private static long Sum(int[] arr) // Return Sum of Int array
        {
            long sum = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                sum += arr[i];
            }
            return sum;
        }

        private static decimal Average(int[] arr) // Return Average of Int Array
        {
            decimal sum = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                sum += arr[i];
            }
            return sum / arr.Length;
        }

        private static int Maximum(int[] arr) // Return Maximum Value
        {
            int max = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                }
            }
            return max;
        }

        private static int Minimum(int[] arr) // Return Minimum Value
        {
            int min = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                if (arr[i] < min)
                {
                    min = arr[i];
                }
            }
            return min;
        }
    }
}