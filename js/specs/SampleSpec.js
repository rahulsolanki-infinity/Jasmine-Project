(function(){
	'use strict';

     describe("sample test", function(){

	      it("exceptations",function () {
               var a = 12;
               var b = a;

           expect(a).toBe(b);
           expect(a).not.toBe(null);

	  });
    });
	describe("Include matcher", function(){
            it("The toBe matcher compare", function(){
               var a = 12;
             expect(a).toEqual(12);
			});
	 });
     describe("Temlates Manager", function(){
       it ("Create Template", function(){
           expect(true).toBe(true);
	   });
  });

      describe("Hello World", function(){
		  it("This is hello world program", function (){
			  expect(true).toBe(true);
		  });
			it("Hello world", function(){
        expect(true).toBe(true);				
			});
	  });

}());
