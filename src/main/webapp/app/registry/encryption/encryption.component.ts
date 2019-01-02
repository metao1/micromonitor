import { Component, OnDestroy, OnInit } from '@angular/core';
import { McmEncryptionService } from './encryption.service';

@Component({
    selector: 'mcm-encryption',
    templateUrl: './encryption.component.html'
})
export class McmEncryptionComponent implements OnInit, OnDestroy {
    showMore: boolean;
    textToEncrypt: string;
    encryptedText: string;
    result: string;

    constructor(private encryptionService: McmEncryptionService) {
        this.showMore = true;
        this.textToEncrypt = '';
        this.encryptedText = '';
        this.result = '';
    }

    ngOnInit() {}

    ngOnDestroy() {}

    encrypt() {
        this.encryptionService.encrypt(this.textToEncrypt).subscribe(
            (response) => {
                this.result = response;
                this.encryptedText = response;
            },
            () => {
                this.result = '';
            }
        );
    }

    decrypt() {
        this.encryptionService.decrypt(this.encryptedText.replace(/^{cipher}/, '')).subscribe(
            (response) => {
                this.result = response;
                this.textToEncrypt = response;
            },
            () => {
                this.result = '';
            }
        );
    }
}
