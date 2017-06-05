# <TODO: TITLE>

## tl;dr

Node.js is evolving right now. The recent Node.js v8 version (not to be mistaken with V8, the JavaScript engine) 
[has just been published](https://nodejs.org/en/blog/release/v8.0.0/). In the meanwhile, the ChakraCore base version of Node.js is 
[in active development](https://github.com/nodejs/node-chakracore).
 
As the future of Node.js stands in JavaScript engine agnosticism, one can legitimately wonder how the different engines 
compete in term of performance.

We performed a benchmark over a few versions of Node.js:
* Node.js 6.10.1 (V8 5.1.281.95)
* Node.js 7.10 (V8 5.5.372.43)
* Node.js 7.10 with the `--turbo --ignition` flags (V8 5.5.372.43)
* Node.js 8.0 (V8 5.8.283.41)
* Node.js 8.0 with the `--turbo --ignition` flags (V8 5.8.283.41)
* Node.js 8.0 (ChaKraCore 2.0.0.0) (Two different builds were used)

The results of this benchmark are available through a small [visualization tool](https://sqreen.github.io/node_engine_bench).

According to these results, if you are using Node.js 8, you really might want to try to run your applications with the
`--turbo --ignition` flags to see a performance boost.

## Context

Even if V8 will stay the default JavaScript engine of Node.js, there is a willing to make the platform engine agnostic and
to let the choice of the JavaScript engine to the developers or operations teams.

The release of Node.js 8 is extremely exciting and has been a huge event within the community. A brand new set of features
have been shipped with the platform. Also, performances consideration are being closely looked at by the developers.

Knowing which JavaScript engine is the best suited for running an application will become a useful skill in the future. 
In this article, we will see how different versions of V8 and ChakraCore compete in term of performances.

## Methodology

To perform a comparative benchmark across versions of Node.js, I selected 35 code patterns that represent typical JavaScript 
usage. Most of them are taken from [Colin Ihrig's 'will it optimize'](https://github.com/cjihrig/will-it-optimize) repository.
These patterns have already been discussed in my [previous article](https://blog.sqreen.io/optimize-your-node-app-by-simply-upgrading-node-js/).

For each pattern, it has been run 10, 100, 1000, 10000 and 10000 times with each version of Node.js in the scope. This 
has been done in order to see how each engine could optimize a stable and hot function at runtime.

The benchmark did not take into account the number of garbage collection events. This means that if the allocated memory given to
each process were to be modified, the whole result of the experiment might be different.

## Results

The complete results are available on [this page](https://sqreen.github.io/node_engine_bench). As a general outcome, we can safely
consider that the ChakraCore based version of Node.js is slower than the V8 based ones.

Also, in most cases, V8 becomes more and more efficient in time. The Ignition + Turbofan optimization architecture will
definitely provide a performance boost. Node.js 8 is shipped with 
[V8 5.8 which does not enable this by default](https://nodejs.org/en/blog/release/v8.0.0/#say-hello-to-v8-5-8). Future versions
of Node.js will be shipped with V8 5.9 (and possibly 5.6) with Ignition + Turbofan enabled.

## Conclusion

This benchmark was incredibly fun to run, and I will plan to keep it updated in the future with newer versions of Node.js and more code patterns. As Sqreen's Node.js engineer, I am extremely concerned about performance. The agent we have built has the least performance impact possible for our clients' applications. Knowing what code patterns are the fastest is a critical part of my job.
If you are concerned by the security of your Node.js applications, you can take a look at [Sqreen](https://www.sqreen.io/?utm_medium=social&utm_source=blog&utm_campaign=Node.js%20engines%20performance%20benchmark) which
revolutionizes the way engineering teams protect apps from intrusions & data loss.

The Turbofan + Ignition architecture seems to speed up Node.js 8 applications a lot. I recommend you try it with your own benchmarks.
Let me know how that goes!

Even if it shows that Node.js is more powerful with V8, this might change in the future as the ChakraCore team update its
engine and as new versions of Node.js appear (I'm looking at you [SpiderNode](https://github.com/mozilla/spidernode)).

The future will be exciting, the race between JavaScript engines will not only happen over language support but over performance too.
In the end, the Node.js ecosystem will become more and more diverse.

I hope you enjoyed this article. Do not hesitate to share it around and to read my other articles on 
[Sqreen's blog](https://blog.sqreen.io/author/vladimir/). I also would love to have your feedback and comments here.


