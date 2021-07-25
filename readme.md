

## Description

This project simulates an art gallery in your browser using WebGL [REGL](https://github.com/regl-project/regl).
It aims at reproducing the experience of a real art gallery.
The architecture is generated using a 10km long 6th order [Hilbert Curve](https://en.wikipedia.org/wiki/Hilbert_curve).
The paintings are asynchronously loaded from the [ARTIC](https://aggregator-data.artic.edu/home) and placed on the walls.
You can use this project to display your own artworks.

## Setup

Installation :
```shell
git clone https://github.com/mfused/virtual-art-gallery.git
npm install
```
Start the budo dev server : 
```shell
npm start
```
Build : 
```shell
npm build
```
Credist: Clement Cariou

## Using it with [local images] (https://wowm.org/virtual2/build.html?api=local)

The local api is accessible using this URI params in the address bar: ```?api=local``` (it's possible to load automatically this API by changing the default API in the [api.js](api/api.js) file). You can change the displayed images in the folder [images](images), you will need to rebuild the project (or relauch the dev server) to apply the modifications.

What you can see here is prototype of the gallery based on Hilbert curve.

The Hilbert curve (also known as the Hilbert space-filling curve) is a continuous fractal space-filling curve first described by the German mathematician David Hilbert in 1891.

Because it is space-filling, its Hausdorff dimension is 2 (precisely, its image is the unit square, whose dimension is 2 in any definition of dimension; its graph is a compact set homeomorphic to the closed unit interval, with Hausdorff dimension 2).

Here is the example of loading images from our small local collection (n=3) :

https://wowm.org/virtual2/build.html?api=local

In our case, Art 836/g Gallery also can fill wall space which is 10 km long, when curve iteration is on 7th.

(https://github.com/mfused/virtual-art-gallery/blob/master/src/map.js, line 202, n=7)

So, to fill all those meters and meters of wall length, we are using artworks from San Francisco Art Institute Art collection.

Here is the example of loading images from San Francisco Art Institut collection (n=7) :

https://wowm.org/virtual2/build.html?api=artic


