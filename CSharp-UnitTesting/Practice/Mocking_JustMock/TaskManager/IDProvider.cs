﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    public class IDProvider : IIDProvider
    {
        private static int id;

        public int Id
        {
            get
            {
                return ++id;
            }
        }
    }
}
