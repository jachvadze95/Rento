using System;
using System.Collections.Generic;
using System.Text;

namespace Rento.Common
{
    public abstract class User
    {
        public virtual int AddUsers(int i)
        {
            return 0;
        }
    }



    public class RedNeckds : User
    {
        public override int AddUsers(int i)
        {
            return 1;
        }
    }
}
