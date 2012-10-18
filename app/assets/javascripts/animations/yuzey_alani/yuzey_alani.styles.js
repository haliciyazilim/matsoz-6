function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/

    gridColor = '#D9D9D9';


    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;

    styles = [
        {
            fillColor: new RgbColor(139/255, 84/255, 1/255, 0.7),
            strokeColor: new RgbColor(139/400, 84/400, 1/400, 0.7),
            strokeWidth: strokeWidth
        },
        {
            fillColor: new RgbColor(142/255, 4/255, 4/255, 0.7),
            strokeColor: new RgbColor(142/400, 4/400, 4/400, 0.7),
            strokeWidth: strokeWidth
        },
        {
            fillColor: new RgbColor(0/255, 110/255, 125/255, 0.7),
            strokeColor: new RgbColor(0/400, 110/400, 125/400, 0.7),
            strokeWidth: strokeWidth
        }
    ]


    style = {
        fillColor: fillColor,
        strokeColor: strokeColor,
        strokeWidth: strokeWidth
    };
}