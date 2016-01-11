var newIdeaTitle, newIdeaBody;

$(document).ready(function () {
  newIdeaTitle = $('.new-idea-title');
  newIdeaBody  = $('.new-idea-body');

  $('.new-idea-submit').on('click', createIdea);
});

function createIdea(event) {
  event.preventDefault();
  clearErrors();
  IdeaRepository.create(getNewIdea())
                .fail(renderError);
}

function getNewIdea() {
  return {
    title: newIdeaTitle.val(),
    body:  newIdeaBody.val()
  }
}

function clearErrors() {
  return errorMessages.html('');
}
