const x_image = document.getElementById('x-image');
const o_image = document.getElementById('o-image');
const inner_boxes = document.querySelectorAll('.inner-box');
const x_alphabet = document.getElementById('x-alphabet');
const o_alphabet = document.getElementById('o-alphabet');


let x_press = 0;
let o_press = 0;


const x_function = (box) => {
    x_image.style.pointerEvents = 'auto';
    x_image.onclick = () => {
        if(x_press <= o_press){
            box.textContent = 'X';
            x_press++;
            o_image.style.boxShadow = "0px 3px 0px 0px red";
            x_image.style.boxShadow = "0 0 0 0";
            box.style.pointerEvents = 'none';
            box.style.boxShadow = "0 0 0 0";
            o_image.style.pointerEvents = 'none';
            checkLogic();
        }
    }
};



const o_function = (box) => {
    o_image.style.pointerEvents = 'auto';
    o_image.onclick = () => {
        if(x_press > o_press){
            box.textContent = 'O';
            o_press++;
            x_image.style.boxShadow = "0px 3px 0px 0px red";
            o_image.style.boxShadow = "0 0 0 0";
            box.style.pointerEvents = 'none';
            box.style.boxShadow = "0 0 0 0";
            x_image.style.pointerEvents = 'none';
            checkLogic();
        }
    }
};



inner_boxes.forEach(inner_box => {
    inner_box.addEventListener('click', () => {
        inner_box.style.boxShadow = "0px 0px 15px red";
        x_function(inner_box);
        o_function(inner_box);
    });
});


const checkLogic = () => {
    const first = inner_boxes[0].textContent;
    const second = inner_boxes[1].textContent;
    const third = inner_boxes[2].textContent;
    const fourth = inner_boxes[3].textContent;
    const fifth = inner_boxes[4].textContent;
    const sixth = inner_boxes[5].textContent;
    const seventh = inner_boxes[6].textContent;
    const eighth = inner_boxes[7].textContent;
    const nineth = inner_boxes[8].textContent;


    if((first == second) && (second == third) && (third == first) ||
       (fourth == fifth) && (fifth == sixth) && (sixth == fourth) ||
       (seventh == eighth) && (eighth == nineth) && (nineth == seventh) ||
       (first == fourth) && (fourth == seventh) && (seventh == first) ||
       (second == fifth) && (fifth == eighth) && (eighth == second) ||
       (third == sixth) && (sixth == nineth) && (nineth == third) ||
       (first == fifth) && (fifth == nineth) && (nineth == first) ||
       (third == fifth) && (fifth == seventh) && (seventh == third) 
    ){
         inner_boxes.forEach(innerbox => {
            innerbox.style.pointerEvents = 'none';
         });

         result();
    }


    else if((first == 'X' || first == 'O') &&
        (second == 'X' || second == 'O') &&
        (third == 'X' || third == 'O') &&
        (fourth == 'X' || fourth == 'O') &&
        (fifth == 'X' || fifth == 'O') &&
        (sixth == 'X' || sixth == 'O') &&
        (seventh == 'X' || seventh == 'O') &&
        (eighth == 'X' || eighth == 'O') &&
        (nineth == 'X' || nineth == 'O')
      ){
          result();
      }

}



const result = () => {

    const first = inner_boxes[0].textContent;
    const second = inner_boxes[1].textContent;
    const third = inner_boxes[2].textContent;
    const fourth = inner_boxes[3].textContent;
    const fifth = inner_boxes[4].textContent;
    const sixth = inner_boxes[5].textContent;
    const seventh = inner_boxes[6].textContent;
    const eighth = inner_boxes[7].textContent;
    const nineth = inner_boxes[8].textContent;

    let result = null;

    if((first == second) && (second == third) && (third == first)){
        result = first;
    }

    else if((fourth == fifth) && (fifth == sixth) && (sixth == fourth)){
        result = fourth;
    }
    
    else if((seventh == eighth) && (eighth == nineth) && (nineth == seventh)){
        result = seventh;
    }

    else if((first == fourth) && (fourth == seventh) && (seventh == first)){
        result = first;
    }

    else if((second == fifth) && (fifth == eighth) && (eighth == second)){
        result = second;
    }

    else if((third == sixth) && (sixth == nineth) && (nineth == third)){
        result = third;
    }

    else if((first == fifth) && (fifth == nineth) && (nineth == first)){
        result = first;
    }

    else if((third == fifth) && (fifth == seventh) && (seventh == third)){
        result = third;
    }

    else{
        result = 'tied';
    }

    console.log(result);

    if(result == 'tied'){
        setTimeout(() => {
            x_alphabet.style.boxShadow = "0px 0px 15px 0px green";
            o_alphabet.style.boxShadow = "0px 0px 15px 0px green";
        },200);
    }

    else{
        setTimeout(() => {
            if(result == 'X'){
                x_alphabet.style.boxShadow = "0px 0px 15px 0px green";
                o_alphabet.style.boxShadow = "0px 0px 15px 0px red";
            }

            else{
                x_alphabet.style.boxShadow = "0px 0px 15px 0px red";
                o_alphabet.style.boxShadow = "0px 0px 15px 0px green";
            }
        },200);
    }
}