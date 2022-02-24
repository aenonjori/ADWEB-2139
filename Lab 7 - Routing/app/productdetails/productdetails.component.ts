import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  list= [1,2,3,4,5]

  Products = [
    {
      id: "#SHL0001",
      image: "assets/product1.png",
      name: "Denim Jacket",
      description: "Lightweight, wind-resistant outer layers that may be worn over additional layers to keep you warm while you're outside having fun."
    },
    {
      id: "#SHL0002",
      image: "assets/product2.png",
      name: "Billie Jeans",
      description: "Made for dancing this pants will make you hee-hee"
    },
    {
      id: "#SHL003",
      image: "assets/product3.png",
      name: "Ben 10 Shirt",
      description: "A shirt from the animated series Ben-10"
    },
    {
      id: "#SHL0004",
      image: "assets/product4.png",
      name: "Air Nike",
      description: "Parker's protege Miles Morales wore the Air Jordan 1 “Chicago” throughout Into The Spider-Verse, culminating in Nike's release of the special edition AJ1 Origin Story."
    },
    {
      id: "#SHL0005",
      image: "assets/product5.png",
      name: "Leather Bag",
      description: "Sewn with high quality leather that last long."
    },
    {
      id: "#SHL0006",
      image: "assets/product6.png",
      name: "Jogging Pants",
      description: "Comfortable jogging pants for running or yoga"
    },
    {
      id: "#SHL0007",
      image: "assets/product7.png",
      name: "Face Shield",
      description: "Use to protect yourself from bacteria or from bad people."
    },
    {
      id: "#SHL0008",
      image: "assets/product8.png",
      name: "Spider Mug",
      description: "A mug inspired from Marvel Spider Man."    
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}