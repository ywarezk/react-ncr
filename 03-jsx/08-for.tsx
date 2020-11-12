
/*
- number
- string
- boolean
- falsy - null/ undefined/ ""
- ReactElement / Component
- array that contains the above
*/

function DogsScheduale() {
	const dogsScheduale: string[] = [
		'Pigletshvily medicine',
		'Pigletshvily & sweetness walk with dogs'
	]
	
	// <ul><li></li><li>...
	return (
		<ul>
			{
				[
					<li>Pigletshvily medicine</li>,
					<li>Pigletshvily medicine</li>,
				]
			}
			
			{
				(function() {
					const lis = [];
					for (let task of dogsScheduale) {
						lis.push(
							<li>
								{task}
							</li>
						)
					}
					return lis	
				})()
			}
			
			{
				dogsScheduale.map((item: string) => {
					return (
						<li>
							{ item }
						</li>
					)
				})
			}
		</ul>
	)
}