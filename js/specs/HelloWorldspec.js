(function()  {
     'use strict';

   describe("Integration Settings", function() {
          //Starting Integration settings suit block
		  //First block
		  describe("Database dropdown", function(){
			  //test case:1
          it("Database settings allow to create database connection", function() {
	           expect(1).toBe(1);
         });
	});  // end of suit block
	     // secoud suit block
		 describe("NSO dropdown", function(){
           //test case :2
          it("NSO settings allow create NSO connections",function(){
			    expect(1).toBe(1);     
	     });
	});  // end of suit block
	      //third suit block
		  describe("Camunda dropdown", function(){
		  //test case:3
		 it("Camunda settings allow to create camunda settings", function(){
			 expect(1).toBe(1);
		 });
     });  // end of suit block
	      // Fourth suit block
		  describe("Logs Setting dropdown" function(){
          //test case :4
		 it("settings allow to create ", function(){
			 expect(1).toBe(1);
         });
      }); //end of suit block
}());