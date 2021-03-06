  function vaildate() {
      if (document.myform.name.value == "") {
          alert("enter ur name")
          document.myform.name.focus()
          return false

      }

      if (document.myform.email.value == "") {
          alert("enter email")
          document.myform.email.focus()
          return false

      }
  }