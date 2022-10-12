    export class Department {
    private departmentId: number;
    private departmentName: string;

    constructor($departmentId: number, $departmentName: string) {
        this.departmentId = $departmentId;
        this.departmentName = $departmentName;
    }

    /**
     * Getter $departmentId
     * @return {number}
     */
    public get $departmentId(): number {
        return this.departmentId;
    }

    /**
     * Getter $departmentName
     * @return {string}
     */
    public get $departmentName(): string {
        return this.departmentName;
    }

    /**
     * Setter $departmentId
     * @param {number} value
     */
    public set $departmentId(value: number) {
        this.departmentId = value;
    }

    /**
     * Setter $departmentName
     * @param {string} value
     */
    public set $departmentName(value: string) {
        this.departmentName = value;
    }

}