function openModal() {
    document.getElementById("modalAdd").setAttribute("style", "visibility:inert;")
    console.log('print')
}

function closeModal() {
    document.getElementById("modalAdd").setAttribute("style", "visibility:hidden;")
    console.log('print')
}

var toggled = false;

function toggle() {
    if (!toggled) {
        toggled = true;
        document.getElementById("delButton").setAttribute("style", "visibility:hidden;")
        return;
    }
    if (toggled) {
        toggled = false;
        document.getElementById("delButton").setAttribute("style", "visibility:innert;")
        return;

    }
}
const transactions = [{
        id: 1,
        itens: "Banana",
        un: 5,
    },

    {
        id: 1,
        itens: "Banana",
        un: 5,
    },

    {
        id: 1,
        itens: "Banana",
        un: 5,
    }


]



document.getElementById("delButton").setAttribute("style", "visibility:hidden;");


//Abaixo configuração de submit

const DOM = {
    transactionContainer: document.querySelector("#tbody"),
    addTransaction(transaction, index) {


        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) {

        const html = `
     <td><button id="delButton" style="visibility: ;">-</button>
         <input type="checkbox" id="0" class="checkbox" />
         <label for="0">    </label></td>
     <td>${transaction.itens}</td>
     <td>${transaction.un}</td>
     <div id="line"></div>
 `
        return html
    }

}

DOM.addTransaction(transactions[0])