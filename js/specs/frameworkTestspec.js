(function()  {
     'use strict';

   describe("Integration Settings", function() {

	    describe("Database dropdown", function() {
         it("Database settings allow to create database connection", function() {
	           expect(1).toBe(1);

         });
       });
        describe("NSO dropdown", function(){
			it("NSO settings allow to create NSO connection", function(){
				expect(1).toBe(1);
       });
	  });
        describe("Camunda dropdown", function(){
			it("Camunda settings allow to create camunda connection", function(){
				expect(1).toBe(1);
          });
       });
	     describe("Logs dropdown", function(){
			 it("Logs settings allow to create log file", function(){
                expect(1).toBe(1);
           });
       });
    });
}());
