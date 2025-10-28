const container = document.createElement('div');
container.classList.add('container');

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.id = 'fileInput';
fileInput.multiple = true;

const uploadButton = document.createElement('button');
uploadButton.id = 'uploadButton';
uploadButton.textContent = 'Upload Files';

const fileList = document.createElement('div');
fileList.id = 'fileList';

container.appendChild(fileInput);
container.appendChild(uploadButton);
container.appendChild(fileList);

document.body.appendChild(container);

// Add more HTML elements as needed