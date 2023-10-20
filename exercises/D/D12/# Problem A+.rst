Problem A+ 
===========

Consanguine Calculations 
-------------------------

.. _input-file-bloodin:

Input File: blood.in
~~~~~~~~~~~~~~~~~~~~

Every person’s blood has 2 markers called ABO alleles. Each of the
markers is represented by one of three letters: A, B, or O. This gives
six possible combinations of these alleles that a person can have, each
of them resulting in a particular ABO blood type for that person.

=========== ==============
Combination ABO Blood Type
=========== ==============
AA          A
AB          AB
AO          A
BB          B
BO          B
OO          O
=========== ==============

Likewise, every person has two alleles for the blood Rh factor,
represented by the characters + and -. Someone who is “Rh positive” or
“Rh+” has at least one + allele, but could have two. Someone who is “Rh
negative” always has two – alleles.

The blood type of a person is a combination of ABO blood type and Rh
factor. The blood type is written by suffixing the ABO blood type with
the + or - representing the Rh factor. Examples include A+, AB-, and O-.

Blood types are inherited: each biological parent donates one ABO allele
(randomly chosen from their two) and one Rh factor allele to their
child. Therefore 2 ABO alleles and 2 Rh factor alleles of the parents
determine the child’s blood type. For example, if both parents of a
child have blood type A-, then the child could have either type A- or
type O- blood. A child of parents with blood types A+ and B+ could have
any blood type.

In this problem, you will be given the blood type of either both parents
or one parent and a child; you will then determine the (possibly empty)
set of blood types that might characterize the child or the other
parent.

Note: an uppercase letter “Oh” is used in this problem to denote blood
types, not a digit (zero).

Input 
~~~~~~

The input consists of multiple test cases. Each test case is on a single
line in the format: the blood type of one parent, the blood type of the
other parent, and finally the blood type of the child, except that the
blood type of one parent or the child will be replaced by a question
mark. To improve readability, whitespace may be included anywhere on the
line except inside a single blood type specification.

The last test case is followed by a line containing the letters E, N,
and D separated by whitespace.

Output 
-------

For each test case in the input, print the case number (beginning with
1) and the blood type of the parents and the child. If no blood type for
a parent is possible, print “IMPOSSIBLE”. If multiple blood types for
parents or child are possible, print all possible values in a
comma-separated list enclosed in curly braces. The order of the blood
types inside the curly braces does not matter.

The sample output illustrates multiple output formats. Your output
format should be similar.

============ ==========================================
Sample Input Output for the Sample Input
============ ==========================================
O+ O- ?      O+ O- {O+, O-}
O+ ? O-      O+ {A-, A+, B-, B+, O-, O+} O-
AB- AB+ ?    AB- AB+ {A+, A-, B+, B-, AB+, AB-}
AB+ ? O+     AB+ IMPOSSIBLE O+
E N D        
============ ==========================================
