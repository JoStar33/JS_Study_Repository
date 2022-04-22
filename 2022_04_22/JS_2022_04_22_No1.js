let mapTest = new Map(); //{}
mapTest.set(1, 'hello'); //{1=>'hello'}
mapTest.set('1', 'hello'); //{1=>'hello', '1'=>'hello'}
mapTest.set(1, 'world'); //{1=>'world', '1'=>'hello'}
mapTest.get(1); //'world'
mapTest.has(1); //true
mapTest.delete(1); // {'1' => 'hello'}
//clear, size 는 Set과 같다.

console.log(mapTest);
//let mapTest = new Map(['name', 'kyle'], ['city', 'seoul']); //{"name" => "kyle", "city" => "seoul"}