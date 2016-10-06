var appFilters = angular.module("customFilters", []);

appFilters.filter("unique", function()  {

    return function (data, propertyName) {  //insert array data and category property

        if(angular.isArray(data) && angular.isString(propertyName))  {
        
            var result = [];
            var keys = {};

            for(var i = 0,len=data.length;i<len;i++)   {

                var val = data[i][propertyName];    //insert into variable val the value that counter find into array data

                if(angular.isUndefined(keys[val])){ // if this category property is undefined into keys array
                    
                    keys[val] = true;   //set this category as property and insert true value
                    result.push(val);
                }
            };
            return result;
        };
    };
});

appFilters.filter("range", function ($filter) {

    // i passed in the array data, selectedPage and pageSize ( max number of products for page)
    return function (data, page, size) {

        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {

            var start_index = (page - 1) * size;    //the starting point for counting the pages ( result zero )

            if (data.length < start_index) {
                
                    return [];  // is not necessary create a new pagess if all my products are less then three ( max content for page )
            }
            else {

                //I add a limit into data array with $filter("limitTo") that show only three items

                /* at the start point into data array ( determinated by start_index = 0 ), 
                i add limit from zero to three products for page with "limitTo" filter */
                return $filter("limitTo")(data.splice(start_index), size);
            }
        }
        else {
            return data;
        };
    };
});

appFilters.filter("pageCount", function () {

    return function (data, size) {

        if(angular.isArray(data))    {
        
            var result = [];

            // set a number of pages based on length of array data ( based on numbers of products ) 
            for (var i = 0; i < Math.ceil(data.length / size) ; i++) { //math.ceil rounds a number UPWARDS

                result.push(i);
            }
            return result;
        }
        else {
            return data;
        }
    };

});


