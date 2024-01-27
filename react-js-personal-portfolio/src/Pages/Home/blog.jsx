export default function Blog() {
   const codeExample_1 = 
      `from airflow import DAG
      from airflow.operators.python_operator import PythonOperator
      from datetime import datetime, timedelta
      
      default_args = {
          'owner': 'your_name',
          'start_date': datetime(2024, 1, 1),
          'depends_on_past': False,
          'retries': 1,
          'retry_delay': timedelta(minutes=5),
      }
      
      dag = DAG(
          'my_data_workflow',
          default_args=default_args,
          description='An example DAG for data orchestration',
          schedule_interval=timedelta(days=1),
      )
  `;
    const codeExample_2 = 
    `from airflow.contrib.operators.dataflow_operator 
    import DataFlowPythonOperator

    task_dataflow = DataFlowPythonOperator(
        task_id='task_dataflow',
        python_callable=my_dataflow_function,// This can be any function in our business domain or  this can be python oprator 
       // that that triggers a dataflow job using apache beam 
        provide_context=True,
        dataflow_default_options={
            'project': 'your_project',
            'region': 'your_region',
            'staging_location': 'gs://your_bucket/staging/',
            'temp_location': 'gs://your_bucket/temp/',
        },
        dag=dag,
    )
  
  `;
  return (
    <section id="Blog" className="about--section">
      <div className="blog--section--img">
      <img src="./img/Kamil_new.JPG" alt="About Me" />
        {/* <img src="./img/Kamil_new.JPG" alt="Blog" /> */}
      </div>
      <div className="hero--section--content--box blog--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">
            <u />
            Google Cloud Composer
          </h1>
          <h2> Introduction:</h2>
          <p className="hero--section-description">
            <li>
              In the ever-evolving landscape of data engineering, efficient
              orchestration of data workflows is crucial. Google Cloud Composer
              emerges as a powerful tool for managing and automating data
              pipelines, leveraging Apache Airflow as its foundation. In this
              blog post, I'll explore the capabilities of Google Cloud Composer,
              focusing on configuring and creating Directed Acyclic Graphs
              (DAGs), tasks, and incorporating Apache Beam for distributed
              processing benefits.
            </li>
            <li>
              In the case of Google Cloud Composer or Apache Airflow, a DAG
              represents a workflow or a pipeline of tasks. Each node in the DAG
              represents a task, and the edges define the sequence in which
              these tasks should be executed. DAGs provide a visual and logical
              representation of the workflow, making it easier to understand and
              manage complex processes.
            </li>
            <li>
              Tasks are the individual units of work within a DAG. Each task
              represents a specific operation or piece of functionality that
              needs to be executed as part of the workflow. Tasks can vary
              widely, from simple operations like running a Python script to
              more complex actions like interacting with cloud services, running
              machine learning models, or initiating data processing jobs.
            </li>
          </p>
          <div>
            <h2>configuring and creating DAgs</h2>
            <pre>
              <code>{codeExample_1}</code>
            </pre>
          </div>
          <div>
            <h2>Creating tasks</h2>
            <pre>
              <code>{codeExample_2}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
