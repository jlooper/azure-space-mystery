---
backdrop: images/dashboard.jpg
---

# Wire

You look at the tangled mass of wire that you need to fetch. It's a critical part of the ISS's missing wing. If you could grab its end, you could wind it up on a spool, just like string, and store it safely.

_"You have several spools for storing cables on this ship. Can you solve this equation to determine how big a spool you need, assuming that this is the long piece of missing wire from the ISS?"_

You estimate that you need a spool circumference of 100 meters to wind up this length of string. You have several spools on your ship, but they are labeled by diameter. Which spool should you choose?

To determine your spool by diameter, input the circumference you think you need to [this calculation tool](https://docs.microsoft.com/en-us/learn/modules/csharp-basic-operations/3-exercise-math-operators?WT.mc_id=academic-11769-cxa). Use the circumference divided by pi (3.14149) like this:

<pre>

//circumference is 100 meters
double diameter = 100/3.14159;
Console.WriteLine("Needed diameter " + diameter);

</pre>

<Query />


