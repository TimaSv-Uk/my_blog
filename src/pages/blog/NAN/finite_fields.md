## I need to undestand **Finite fileds** so i can implement an enctyprion algorithm
I got this task from my NAN Supervisor 
``` 0 1 x x+1

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

Jan 8 2026
TODO:
- multiplication table 8/8
- start rebuilding cryptall_2 with C


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

Sat Jan 10 12:41:55 PM EET 2026
TODO:
- multiplication table 8/8
- start rebuilding cryptall_2 with C

What Gemini gave me on: explain whai i need to do and all of that that been done before like im stupid
```
Part 1: What you have done before (The 2-bit world)
In your notes, you listed 0, 1, x, x+1.
You built a world where:Numbers represent 2 bits: (00, 01, 10, 11)
.Addition is XOR: $1+1=0$. (You just cancel out duplicates).
The "Wrap-around" Rule: You decided that the world ends at $x^2$. 
If you ever hit $x^2$, you must replace it with $x+1$.
You proved that (x+1) * x = 1 using that rule. 
That was the "test" to see if your number system works. 

Part 2: What you need to do now (The 3-bit world)
Now you are upgrading to 3 bits.
The Structure: $ax^2 + bx + c$
The Population: Since $a, b, c$ can be 0 or 1, you have $2^3 = 8$ distinct "numbers."
The 8 Expressions (The Population):
    0 1 x x+1 x^2 x^2+1 x^2+x x^2+x+1
```
Ok, i dont get where from do we get  **0 1 x x+1 x^2 x^2+1 x^2+x x^2+x+1**
```
$$\mathbf{a}x^2 + \mathbf{b}x + \mathbf{c}
Because we are working with computers (binary), the placeholders a, b, and c can only be 0 (off) or 1 (on).
To find "all the expressions," we just list every possible combination of those three switches.
Since there are 3 switches, and each has 2 positions, there are $2 \times 2 \times 2 = 8$ combinations.
Here is the list, counting up exactly like binary numbers (000 to 111):

Switch A (x2),Switch B (x),Switch C (1),The Resulting Expression
0,0,0,0
0,0,1,1
0,1,0,x
0,1,1,x + 1
1,0,0,x$^2$
1,0,1,x$^2$ + 1
1,1,0,x$^2$ + x
1,1,1,x$^2$ + x + 1
```
Now i kingda get from where we get all those numbers
for example
**ax^2 + bx + c** that is our Polinomial
Example:
**ax^2 + bx**

    Switch A (x2),Switch B (x),The Resulting Expression
        0,0,0
        0,1,x
        1,0,x^2
        1,1,x^2+x

# It was simple we just use X when switch is 1 and ignor it when it 0

Next, here is the rule we choose  
    **x^3 = x+1**
```
    The Rule: Whenever you see $x^3$, replace it with $x+1$.
    Consequently, as you noted:
        x^4 = x * x^3 = x(x+1) = x^2+x
```
```
 The "Golden Rule" SubstitutionRemember the rule you wrote in your notes?
 $x^3 = x+1$
 This means "Whenever you see an $x^3$,
 you are allowed (and required) to swap it for an $x+1$.
 So, we look at our equation again:
    x * x^3 = x * (x+1)
 The Distribution (Multiplying it out)
    Now you just do normal algebra to multiply $x$ by the group 
        $(x+1)
            = 
        x * x = x^2
        x * 1 = x
        $$Put them together:x^2 + x
```
I see i can apply all those Rules 
    Communucative
    Assosiative
    Identity
    Inverse
    Destribution
Now the only thing i don't get is what is the problem exactly 

```
The Mission
Your goal is to force every single calculation to land back on one of those 8 original numbers.
You use the Reduction Rule x^3 = x+1 as your "hammer."
whenever a number gets too big (like x^3 or x^4), you use the hammer to smash it down until it fits back on the list.
```
I see now i need to make multiplication table 

×,0,1,x,x+1,x^2,x^2+1,x^2+x,x^2+x+1
0, 0,0,0,0,0,0,0,0
1, 0,1,x,x+1,x^2,x^2+1,x^2+x,x^2+x+1
x, 0,x,x^2,x^2+x,x+1,1,x^2+x+1,x^2+1
x+1, 0,x+1,x^2+x,x^2+1,x^2+x+1,x^2,1,x
x^2, 0,x^2,x+1,x^2+x+1,x^2+x,x,x^2+1,1
x^2+1, 0,x^2+1,1,x^2,x,x^2+x+1,x+1,x^2+x
x^2+x, bellow
x^2+x+1	0,	x^2+x+1, x^2+1,	x,	1,	x^2+x, x^2,	x+1

**x^3 = x+1**
Example:
(x^2+x) * 0  = 0
(x^2+x) * 1  = (x^2+x)
(x^2+x) * x  = (x * x^2)+(x*x) =  x^3 + x^2 = x + 1 + x^2
(x^2+x) * (x+1)  = ((x * x^2)+(x*x))+(x^2 + x) =  (x + 1 + x^2)+(x^2 + x)  = (x^2 + x^2) + (x + x) + 1 = 0 + 0 + 1 = 1
    i see, i need to Group them: (x^2 + x^2) + (x + x) + 1
    ```
    Now, remember the very first rule of this world (Binary/XOR math):1 + 1 = 0(Two of the same thing cancel each other out completely.)
    Apply that to your groups:: You have two x^2's. 
        (x² + x²) Result = 0.
        (x + x) Result = 0
    ```
Wrong: 
(x^2+x) * x^2 = ((x^2+x) * x)+((x^2+x) * x) = (x + 1 + x^2) + (x + 1 + x^2) = (x^2 + x^2) + (x + x) + (1+1) = 0
Correct:
(x^2+x) * x^2  = x^4 + x^3 = x * x^3 + x^3 = x*(x+1) + (x+1) = x^2 + x + (x+1) =x^2 + (x + x) +1 = x^2+1

Wrong: 
(x^2+x) * (x^2+1) = x^2+1 + (x^2+x) = (x^2+x^2)+1 + x =  x 
Correct:

    ```
        Step 4: Cancel DuplicatesGroup the terms:
        x^2 terms: x^2 + x^2 = 0x 
            terms: x + x + x(First two x's become 0)(One x remains)
            Numbers: 1
    ```
(x^2+x) * (x^2+1) = x^4+x^3+x^2+x = (x^2+x) + (x^2 + x) + (x+1) = x+1 
no battary left, damn
TODO:

Sun Jan 11 01:02:41 PM EET 2026
(x^2+x) * (x^2+x) =  x^4+x^3+x^3+x^2 = (x * x^3)+ (x+1)+(x+1)+x^2 = (x * (x+1))+ (x+1)+(x+1)+x^2 = (x * (x+1)) + x^2 =  x^2+x+x^2 = x
(x^2+x) * (x^2+x+1) = x^4+x^3 + x^3+x^2 + x^2+x = x^4+x =(x * x^3) + x = (x * (x+1))+x = x^2+x+x= x^2

That is x^2+x correct row from mult talble
0 x^2+x	x^2+x+1	1	x^2+1	x+1	x	x^2

