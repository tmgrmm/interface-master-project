$(document).ready(function(){"use strict";$("#reviews-table").DataTable({language:{paginate:{previous:"<i class='mdi mdi-chevron-left'>",next:"<i class='mdi mdi-chevron-right'>"},info:"Showing products _START_ to _END_ of _TOTAL_",lengthMenu:'Display <select class=\'custom-select custom-select-sm ml-1 mr-1\'><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="-1">All</option></select> reviews'},pageLength:5,
        columns:[{orderable:!0},{orderable:!0},{orderable:!0},{orderable:!0},{orderable:!0},{orderable:!0},{orderable:!1}],select:{style:"multi"},order:[[1,"asc"]],drawCallback:function(){$(".dataTables_paginate > .pagination").addClass("justify-content-end")}})});