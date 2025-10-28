const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const fileList = document.getElementById('fileList');

let selectedFiles = [];

fileInput.addEventListener('change', (e) => {
    selectedFiles = Array.from(e.target.files);
    updateFileList();
});

uploadButton.addEventListener('click', () => {
    // Handle file upload logic here
    console.log('Uploading files...');
    console.log(selectedFiles);
});

function updateFileList() {
    fileList.innerHTML = '';
    selectedFiles.forEach((file) => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.innerHTML = `
            <span class="file-name">${file.name}</span>
            <span class="file-size">${formatFileSize(file.size)}</span>
            <span class="file-type">${file.type}</span>
        `;
        fileList.appendChild(fileItem);
    });
}

function formatFileSize(size) {
    if (size < 1024) {
        return size + ' bytes';
    } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + ' KB';
    } else {
        return (size / (1024 * 1024)).toFixed(2) + ' MB';
    }
}

// Create file list header
const fileListHeader = document.createElement('div');
fileListHeader.classList.add('file-list-header');
fileListHeader.innerHTML = `
    <span>File Name</span>
    <span>File Size</span>
    <span>File Type</span>
`;
fileList.appendChild(fileListHeader);

// Add event listeners for file actions
fileList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const fileId = e.target.dataset.fileId;
        // Handle file action logic here
        console.log(File ${fileId} action clicked);
    }
});

// Initialize file list
updateFileList();

// Add more code as needed