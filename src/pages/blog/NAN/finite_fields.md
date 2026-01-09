## I need to undestand **Finite fileds** so i can implement an enctyprion algorithm
I got this task from my NAN Supervisor 
```
    0 1 x x+1

    0+1 = 1 
    1+1 = 0
    x+x = 0
    1+x = x
    1+x+x = 1

    x^2+x+1 = 0
    x^2 = x+1

    0=0
    1=1

    x+1=x^2
    (x+1)^2=x

    (x+1) * x = x^2 + x = x + x + 1 = 1


    x^2 x^3
    x^2


    next finite field
    x^3+1 + (x+1)

    ax^2 + bx + c
    виразів 8
    a,b,c can be 0,1 

    x^3 = (x+1)
    x^4 = x^2+x
```

TODO:
multiplication table 8/8
start rebuilding cryptall_2 with C


Let's start with this video 
[Finite Fields in Cryptography Why and How]: https://www.youtube.com/watch?v=ColSUxhpn6A

i'm confused and feel stupid, but i gathered that finate filed differ 
from modulo operation by a set of rules they must follow.
Those rules:
- Communucative a+b = b+a , a*b=b*a
- Assosiative (a+b)+c = a+(b+c) , (a*b)*c = a*(b*c)
- Identity  0,1 are numbers, 0=!1, a + 0 = a, a * 1 =a
- Inverse  a + -a = 0, a + a^-1 = 1, 0^-1 does not need to exist
- Destribution a * (b+c) = (a*b)+(a*c)

Also with modulo operations all those rules are kept but **Inverse**,
there is no  **a^-1** fot prime numbers like 5 but there is for 3 

if Z_100 (modulo 100) that is no finati file due to above non **Inverse**,
but Z_prime number is finite field 
For example Z_101 number is finite field ,there is always multiplicative inverse
### Proof: via  the (extended) Euclidean algorithm.
### Proof: via  Euler's theory.

I guess i will look  into **the (extended) Euclidean algorithm** or **Euler's theory**, thou it may be a little of track

## Recipe for Finite field of order N

    Z_N n is prime
    a+b := a+b%N
    a*b := a*b%N
    -a := N-a
    a^-1 := a^N-2 % N(by Euler) or last "t" in EEA(the (extended) Euclidean algorithm)

### NOTE
- More general way: irreducible polynomials.
- All  finite fields are of order p^k (p prime, k >0)
    - Our recipe only creates fields of order p^1

**Ring** is like a filed but not require: Communucative,Identity , Inverse  for multiplication

I'm tired, it time for a break 🍩🍩🍩🍩🍩
