export declare class McmMetricsDatasourceComponent {
    /**
     * object containing all datasource related metrics
     */
    datasourceMetrics: {
        active: any;
        min: any;
        idle: any;
        max: any;
        usage: any;
        acquire: any;
        creation: any;
    };
    /**
     * boolean field saying if the metrics are in the process of being updated
     */
    updating: boolean;
    filterNaN(input: any): any;
}
